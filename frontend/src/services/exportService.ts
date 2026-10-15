import { EducationNode, RelationshipEdgeData, SourceRecord } from '../types';
import { DatasetSchema } from '../schemas';

export interface ExportData {
  version: string;
  exportDate: string;
  source: string;
  nodes: EducationNode[];
  relationships: RelationshipEdgeData[];
  sources: SourceRecord[];
}

/**
 * Downloads data as formatted JSON
 */
export function downloadJsonFile(filename: string, data: unknown): void {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Validates and imports user-supplied JSON dataset
 */
export function validateImportDataset(
  jsonText: string
): { success: true; data: ExportData } | { success: false; error: string } {
  try {
    const raw = JSON.parse(jsonText);
    const parsed = DatasetSchema.safeParse(raw);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return {
        success: false,
        error: `Validation error at ${issue.path.join('.')}: ${issue.message}`
      };
    }

    return {
      success: true,
      data: {
        version: '1.0.0',
        exportDate: new Date().toISOString(),
        source: 'User Imported Dataset',
        nodes: parsed.data.nodes,
        relationships: parsed.data.relationships,
        sources: parsed.data.sources
      }
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { success: false, error: `Invalid JSON syntax: ${msg}` };
  }
}

import { EducationNode, FunctionalCategory, GovernmentLevel, VerificationStatus } from '../types';

export interface SearchFilters {
  level?: GovernmentLevel | 'all';
  category?: FunctionalCategory | 'all';
  verificationStatus?: VerificationStatus | 'all';
  sectionId?: string | 'all';
}

export interface SearchResult {
  node: EducationNode;
  matchedFields: string[];
  score: number;
}

/**
 * High-performance client-side search engine across all node fields
 */
export function searchEducationNodes(
  nodes: EducationNode[],
  query: string,
  filters: SearchFilters = {}
): SearchResult[] {
  const cleanQuery = query.trim().toLowerCase();

  return nodes
    .filter((node) => {
      // Apply filters
      if (filters.level && filters.level !== 'all' && node.level !== filters.level) {
        return false;
      }
      if (filters.category && filters.category !== 'all' && node.category !== filters.category) {
        return false;
      }
      if (filters.verificationStatus && filters.verificationStatus !== 'all' && node.verificationStatus !== filters.verificationStatus) {
        return false;
      }
      if (filters.sectionId && filters.sectionId !== 'all' && node.sectionId !== filters.sectionId) {
        return false;
      }
      return true;
    })
    .map((node) => {
      if (!cleanQuery) {
        return { node, matchedFields: [], score: 1 };
      }

      let score = 0;
      const matchedFields: string[] = [];

      // Exact title match (highest score)
      if (node.title.toLowerCase() === cleanQuery) {
        score += 100;
        matchedFields.push('title');
      } else if (node.title.toLowerCase().includes(cleanQuery)) {
        score += 50;
        matchedFields.push('title');
      }

      // Abbreviation match (high score)
      if (node.abbreviation?.toLowerCase() === cleanQuery) {
        score += 80;
        matchedFields.push('abbreviation');
      } else if (node.abbreviation?.toLowerCase().includes(cleanQuery)) {
        score += 40;
        matchedFields.push('abbreviation');
      }

      // ID match
      if (node.id.toLowerCase().includes(cleanQuery)) {
        score += 30;
        matchedFields.push('id');
      }

      // Summary search
      if (node.summary.toLowerCase().includes(cleanQuery)) {
        score += 20;
        matchedFields.push('summary');
      }

      // Legal status
      if (node.legalStatus?.toLowerCase().includes(cleanQuery)) {
        score += 25;
        matchedFields.push('legalStatus');
      }

      // Establishing Law
      if (node.establishingLaw?.some((law) => law.toLowerCase().includes(cleanQuery))) {
        score += 35;
        matchedFields.push('establishingLaw');
      }

      // Mandate & powers
      if (node.powers?.some((p) => p.toLowerCase().includes(cleanQuery))) {
        score += 15;
        matchedFields.push('powers');
      }

      if (node.limitations?.some((l) => l.toLowerCase().includes(cleanQuery))) {
        score += 15;
        matchedFields.push('limitations');
      }

      // Examinations
      if (node.relatedExaminations?.some((e) => e.toLowerCase().includes(cleanQuery))) {
        score += 30;
        matchedFields.push('relatedExaminations');
      }

      return { node, matchedFields, score };
    })
    .filter((res) => !cleanQuery || res.score > 0)
    .sort((a, b) => b.score - a.score);
}

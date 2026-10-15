import { ReactFlowProvider } from '@xyflow/react';
import { TopToolbar } from './components/navigation/TopToolbar';
import { SectionSidebar } from './components/navigation/SectionSidebar';
import { WhiteboardCanvas } from './components/canvas/WhiteboardCanvas';
import { DetailPanel } from './components/details/DetailPanel';
import { SearchResults } from './components/navigation/SearchResults';
import { AuthorityMatrixModal } from './components/modals/AuthorityMatrixModal';
import { CoverageAuditModal } from './components/modals/CoverageAuditModal';
import { SourceRegisterModal } from './components/modals/SourceRegisterModal';
import { ExportImportModal } from './components/modals/ExportImportModal';
import { SectionPrintPdfModal } from './components/modals/SectionPrintPdfModal';
import { ProjectManagerModal } from './components/modals/ProjectManagerModal';
import { AddNodeModal } from './components/modals/AddNodeModal';
import { AddRelationshipModal } from './components/modals/AddRelationshipModal';
import { SectionManagerModal } from './components/modals/SectionManagerModal';

export default function App() {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#f8faf9] text-slate-800 antialiased font-sans select-none">
        {/* Top Header & Navigation */}
        <TopToolbar />
        <SearchResults />

        {/* Workspace Canvas & Sidebars */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Left Outline & Filter Sidebar */}
          <SectionSidebar />

          {/* Central Interactive Zoomable Knowledge Map */}
          <main className="flex-1 relative h-full w-full overflow-hidden">
            <WhiteboardCanvas />
          </main>

          {/* Right Slide-out Detail Reading Panel */}
          <DetailPanel />
        </div>

        {/* Global Modals for Section 15, 16, 19, Data Exchange, Projects, PDF Print & CRUD Modals */}
        <AuthorityMatrixModal />
        <CoverageAuditModal />
        <SourceRegisterModal />
        <ExportImportModal />
        <SectionPrintPdfModal />
        <ProjectManagerModal />
        <AddNodeModal />
        <AddRelationshipModal />
        <SectionManagerModal />
      </div>
    </ReactFlowProvider>
  );
}

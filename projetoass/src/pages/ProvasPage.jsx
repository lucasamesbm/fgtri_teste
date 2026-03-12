import MainLayout from "../layouts/MainLayout";
import Federar from "../components/layout/Federar";
import Provas from "../components/provas/Provas";

function ProvasPage() {
  return (
    <MainLayout>
      <Federar />
      <Provas />
    </MainLayout>
  );
}

export default ProvasPage;

import MainLayout from "../layouts/MainLayout";
import Federar from "../components/layout/Federar";
import Taxas from "../components/taxas/Taxas";

function TaxasPage() {
  return (
    <MainLayout>
      <Federar />
      <Taxas />
    </MainLayout>
  );
}

export default TaxasPage;

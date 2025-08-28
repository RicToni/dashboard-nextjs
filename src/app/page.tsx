import ChartOverview from "@/components/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Percent, Users } from "lucide-react";
import { Sales } from "@/components/sales";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de Vendas:
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />


            </div>
            <CardDescription>
              Total de vendas no último mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$: 42.698,24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />


            </div>
            <CardDescription>
              Novos clientes em 30 dias 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">28</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos de Hoje:
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />


            </div>
            <CardDescription>
              Total de pedidos de hoje. 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos do mês:
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />


            </div>
            <CardDescription>
              Total de pedidos do mês. 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">212</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}

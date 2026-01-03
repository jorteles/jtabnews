import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdateAt />
      <DatabaseStatus />
    </>
  );
}

function UpdateAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let updateAtText = "Carregando...";
  if (!isLoading && data) {
    const updatedAt = new Date(data.updated_at);
    updateAtText = updatedAt.toLocaleString("pt-BR");
  }
  return <div>Última atualização: {updateAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation = "Carregando...";

  if (!isLoading && data) {
    const databaseInfo = data.dependencies.database;
    databaseStatusInformation = (
      <ul>
        <li>Versão: {databaseInfo.version}</li>
        <li>Conexões máximas: {databaseInfo.max_connections}</li>
        <li>Conexões abertas: {databaseInfo.opened_connections}</li>
      </ul>
    );
  }

  return (
    <>
      <h2>Banco de Dados</h2>
      <div>{databaseStatusInformation}</div>
    </>
  );
}

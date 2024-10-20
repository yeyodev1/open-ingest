import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";

// Cargar las páginas web utilizando Puppeteer
const loader = new PuppeteerWebBaseLoader("https://www.homewatch.es", {
  // Puedes incluir opciones personalizadas de Puppeteer si las necesitas
});

// Función para cargar y mostrar los documentos
const run = async () => {
  try {
    // Realizar el scraping y cargar los documentos
    const docs = await loader.load();

    // Mostrar los documentos cargados
    console.log("Documentos cargados: ", docs);

    // Procesar los documentos según lo que quieras hacer en Langchain
    // Aquí los estás enviando al procesamiento de Langchain directamente
    await procesarDocumentosLangchain(docs);

    // Mostrar mensaje de éxito después de procesar los documentos
    console.log("Datos ingestados scrapper");

  } catch (error) {
    console.error("Error cargando los documentos: ", error);
  }
};

// Función para procesar los documentos en Langchain
const procesarDocumentosLangchain = async (docs: any) => {
  // Aquí puedes implementar la lógica que Langchain necesita para trabajar con estos documentos.
  // Esto dependerá de lo que quieras hacer con ellos: análisis, indexación, respuestas, etc.
  docs.forEach((doc: any, index: any) => {
    console.log(`Documento ${index + 1}:`);
    console.log("Contenido: ", doc.pageContent);
    console.log("Metadata: ", doc.metadata);
  });

  // Si quieres integrarlo a un módulo de Langchain como un LLM o QA Chain, lo harías aquí.
};

run();

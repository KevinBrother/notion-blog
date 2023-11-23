import { NotionAPI } from 'notion-client'

// you can optionally pass an authToken to access private notion resources
const api = new NotionAPI()

// fetch a page's content, including all async blocks, collection queries, and signed urls
const rootNotionPageId = '9a6121efd10342448fac58b34b082cd8';
api.getPage(rootNotionPageId).then(rst => {
    console.log('rst.block.length', Object.keys(rst.block).length)
    console.log('rst', rst)
})

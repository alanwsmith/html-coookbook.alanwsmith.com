export default async (request, context) => {
    let headerText = ''
    request.headers.forEach((header) => {
        headerText += `${header}\n`
    })
    return new Response(context.json, {
        headers: { 'content-type': 'text/plain' },
    })
}

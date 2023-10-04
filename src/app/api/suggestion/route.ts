/* eslint-disable import/prefer-default-export */
export async function GET(request: Request) {
    const response = await fetch ('...', {
        cache: 'no-store'
    })

    return new Response('Hello')
}
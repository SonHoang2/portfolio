import sharp from 'sharp';

export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" fill="#f1f2ec"/><circle cx="90" cy="90" r="60" fill="#2438e8"/></svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}

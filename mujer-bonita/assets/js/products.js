/**
 * Mujer Bonita — Catálogo de 96 productos
 * Datos reales de mayoreo y menudeo
 */

const PRICE_LABELS = {
    pieza: 'Pieza',
    caja: 'Caja',
    docena: 'Docena',
    paquete: 'Paquete',
    tira: 'Tira',
    mayoreo: 'Mayoreo',
    unica: 'P. único'
};

const CATEGORIES = [
    { id: 'todos', label: 'Todo', icon: '✨' },
    { id: 'labiales', label: 'Labiales', icon: '💋' },
    { id: 'rubores', label: 'Rubores', icon: '🌸' },
    { id: 'pestañas', label: 'Pestañas', icon: '👁️' },
    { id: 'cejas', label: 'Cejas', icon: '✏️' },
    { id: 'bases', label: 'Bases', icon: '🧴' },
    { id: 'perfumes', label: 'Perfumes', icon: '🌹' },
    { id: 'accesorios', label: 'Accesorios', icon: '🎀' }
];

const PRODUCTS = [
    { id: 1, img: 'IMG-20260616-WA0000.jpg', title: 'Perfume de Bolsillo Hello Kitty Favorbeauty', pieza: 11, caja: 227 },
    { id: 2, img: 'IMG-20260616-WA0001.jpg', title: 'Pestañas Postizas New 3D Mink Favorbeauty', pieza: 12, caja: 122 },
    { id: 3, img: 'IMG-20260616-WA0002.jpg', title: 'Gel para Cejas Brows Favorbeauty', pieza: 9, caja: 192 },
    { id: 4, img: 'IMG-20260616-WA0003.jpg', title: 'Polvo Banana Setting Powder Favorbeauty', pieza: 15, caja: 157 },
    { id: 5, img: 'IMG-20260616-WA0004.jpg', title: 'Gel y Máscara para Cejas Glam Favorbeauty', pieza: 11, caja: 227 },
    { id: 6, img: 'IMG-20260616-WA0005.jpg', title: 'Moños con Mariposa en Tira', pieza: 11, tira: 58 },
    { id: 7, img: 'IMG-20260616-WA0006.jpg', title: 'Ligas con Moño para Niña', pieza: 7, docena: 70, categoria: 'accesorios' },
    { id: 8, img: 'IMG-20260616-WA0007.jpg', title: 'Perfiladores de Cejas Favorbeauty', pieza: 9, caja: 149 },
    { id: 9, img: 'IMG-20260616-WA0008.jpg', title: 'Bálsamo Labial Panda Honey', pieza: 17, docena: 175 },
    { id: 10, img: 'IMG-20260616-WA0009.jpg', title: 'Fragancia Body Mist Emerald Glow 88ml', pieza: 30, caja: 315 },
    { id: 11, img: 'IMG-20260616-WA0010.jpg', title: 'Pestañas Postizas False Eyelashes Mink 3D', pieza: 12, caja: 122 },
    { id: 12, img: 'IMG-20260616-WA0011.jpg', title: 'Set de Brochas Favor Beauty', paquete: 36, categoria: 'accesorios' },
    { id: 13, img: 'IMG-20260616-WA0012.jpg', title: 'Delineador con Sello Eyeliner+Seal Favorbeauty', pieza: 10, caja: 219 },
    { id: 14, img: 'IMG-20260616-WA0013.jpg', title: 'Delineador Líquido de Colores Favorbeauty', pieza: 10, caja: 201 },
    { id: 15, img: 'IMG-20260616-WA0014.jpg', title: 'Uñas Postizas Infantiles Children\'s Nails', pieza: 8, docena: 79 },
    { id: 16, img: 'IMG-20260616-WA0015.jpg', title: 'Base de Maquillaje Perfect Matte + Poreless 12H', pieza: 29, caja: 306 },
    { id: 17, img: 'IMG-20260616-WA0016.jpg', title: 'Base de Maquillaje Nude Favorbeauty', pieza: 35, caja: 359 },
    { id: 18, img: 'IMG-20260616-WA0017.jpg', title: 'Kit Máscara Volumizing y Tinte para Cejas Favorbeauty', pieza: 40, caja: 210 },
    { id: 19, img: 'IMG-20260616-WA0018.jpg', title: 'Máscara de Pestañas Volumizing Lashcraft', pieza: 12, caja: 254 },
    { id: 20, img: 'IMG-20260616-WA0019.jpg', title: 'Mascarilla para Labios Lip Sleeping Mask Favorbeauty', pieza: 16, caja: 166 },
    { id: 21, img: 'IMG-20260616-WA0020.jpg', title: 'Moño Grande Rosa con Pedrería', pieza: 6, docena: 66 },
    { id: 22, img: 'IMG-20260616-WA0021.jpg', title: 'Llaveros Variados Misora Accesorios', pieza: 10, docena: 79, categoria: 'accesorios' },
    { id: 23, img: 'IMG-20260616-WA0022.jpg', title: 'Moños con Estampado de Cereza', pieza: 7, docena: 70 },
    { id: 24, img: 'IMG-20260616-WA0023.jpg', title: 'Aceite para Labios Lip Oil Favorbeauty', pieza: 13, caja: 262 },
    { id: 25, img: 'IMG-20260616-WA0024.jpg', title: 'Brillo Labial New Lip Gloss Moist Favorbeauty', pieza: 13, caja: 271 },
    { id: 26, img: 'IMG-20260616-WA0025.jpg', title: 'Bálsamo Labial Humectante Forma de Lápiz Favorbeauty', pieza: 6, caja: 122 },
    { id: 27, img: 'IMG-20260616-WA0026.jpg', title: 'Kit Rímel Volume Curl y Tinta para Cejas Favorbeauty', pieza: 40, caja: 210 },
    { id: 28, img: 'IMG-20260616-WA0027.jpg', title: 'Base de Maquillaje Lasting Finish SPF 20+', pieza: 35, caja: 359 },
    { id: 29, img: 'IMG-20260616-WA0028.jpg', title: 'Bálsamo Labial Lip Glow Color Reviver Favorbeauty', pieza: 10, caja: 210 },
    { id: 30, img: 'IMG-20260616-WA0029.jpg', title: 'Polvo Suelto Mineral de Cereza Favorbeauty', pieza: 28, caja: 289 },
    { id: 31, img: 'IMG-20260616-WA0030.jpg', title: 'Polvo Compacto Perfect Natural Face Powder SPF 35', pieza: 27, caja: 280 },
    { id: 32, img: 'IMG-20260616-WA0031.jpg', title: 'Jabón Rice Milk Soap Gluta + Colágeno Favorbeauty', pieza: 13, caja: 136 },
    { id: 33, img: 'IMG-20260616-WA0032.jpg', title: 'Lápiz para Cejas 36H Browlash Favorbeauty', pieza: 10, caja: 210 },
    { id: 34, img: 'IMG-20260616-WA0033.jpg', title: 'Máscara de Pestañas Fiber Lashes 7D Waterproof', pieza: 15, caja: 315 },
    { id: 35, img: 'IMG-20260616-WA0034.jpg', title: 'Brillo Labial Hello Kitty con Cascabel Favorbeauty', pieza: 14, caja: 289 },
    { id: 36, img: 'IMG-20260616-WA0035.jpg', title: 'Polvo Banana Luxury Setting Powder Favorbeauty', pieza: 19, caja: 201 },
    { id: 37, img: 'IMG-20260616-WA0036.jpg', title: 'Kit de Pestañas Silky Lashes DIY Cluster Favorbeauty', unica: 60 },
    { id: 38, img: 'IMG-20260616-WA0037.jpg', title: 'Kit de Maquillaje 3 en 1 Colossal Big Shot Favorbeauty', pieza: 37, caja: 385 },
    { id: 39, img: 'IMG-20260616-WA0038.jpg', title: 'Fijador Mist & Fix Favorbeauty', pieza: 25, caja: 245 },
    { id: 40, img: 'IMG-20260616-WA0039.jpg', title: 'Moño con Lentejuelas en Tira HT-3537', pieza: 11, tira: 58 },
    { id: 41, img: 'IMG-20260616-WA0040.jpg', title: 'Esmalte de Uñas Efecto Gel Favorbeauty', pieza: 8, caja: 157 },
    { id: 42, img: 'IMG-20260616-WA0041.jpg', title: 'Bálsamo Labial de Fresa Favorbeauty', pieza: 8, caja: 175 },
    { id: 43, img: 'IMG-20260616-WA0042.jpg', title: 'Base de Maquillaje HD Liquid Coverage Favorbeauty', pieza: 37, caja: 385 },
    { id: 44, img: 'IMG-20260616-WA0043.jpg', title: 'Vaselina Labial de Animalitos Favorbeauty', pieza: 6, caja: 122 },
    { id: 45, img: 'IMG-20260616-WA0044.jpg', title: 'Máscara de Pestañas Beauty Colos Sal Favorbeauty', pieza: 13, caja: 262 },
    { id: 46, img: 'IMG-20260616-WA0045.jpg', title: 'Tinta Líquida para Cejas Grande Brow-Fill Favorbeauty', pieza: 11, caja: 227 },
    { id: 47, img: 'IMG-20260616-WA0046.jpg', title: 'Máscara de Pestañas Colossal Volum\' Express Favorbeauty', pieza: 10, caja: 201 },
    { id: 48, img: 'IMG-20260616-WA0047.jpg', title: 'Labial Líquido Mate Favorbeauty', pieza: 9, caja: 192 },
    { id: 49, img: 'IMG-20260616-WA0048.jpg', title: 'Fragancia Body Mist Hello Kitty 88ml', pieza: 30, caja: 315 },
    { id: 50, img: 'IMG-20260616-WA0049.jpg', title: 'Perfume Infantil Stitch y Angel Favorbeauty', pieza: 32, caja: 332 },
    { id: 51, img: 'IMG-20260616-WA0050.jpg', title: 'Perfume de Bolsillo Kuromi Romantic Favorbeauty', pieza: 13, caja: 271 },
    { id: 52, img: 'IMG-20260616-WA0051.jpg', title: 'Mascarillas Faciales Cereza y Aguacatito Favorbeauty', pieza: 5, paquete: 45 },
    { id: 53, img: 'IMG-20260616-WA0052.jpg', title: 'Parches de Colágeno para Ojos Favorbeauty', pieza: 3, docena: 31 },
    { id: 54, img: 'IMG-20260616-WA0053.jpg', title: 'Rubor y Labial Milk Blush Lipstick Favorbeauty', pieza: 12, caja: 245 },
    { id: 55, img: 'IMG-20260616-WA0055.jpg', title: 'Llavero Signo Zodiacal Aries con Pedrería', pieza: 8, docena: 49, categoria: 'accesorios' },
    { id: 56, img: 'IMG-20260616-WA0056.jpg', title: 'Mascarillas Faciales Sandía y Panda Favorbeauty', pieza: 5, paquete: 45 },
    { id: 57, img: 'IMG-20260616-WA0057.jpg', title: 'Brillo Labial Chocolate Lip Gloss Favorbeauty', pieza: 12, caja: 255 },
    { id: 58, img: 'IMG-20260616-WA0058.jpg', title: 'Rubor Kuromi y My Melody Favorbeauty', pieza: 14, caja: 289 },
    { id: 59, img: 'IMG-20260616-WA0059.jpg', title: 'Polvo Suelto Nude Makeup Look Favorbeauty', pieza: 38, caja: 201 },
    { id: 60, img: 'IMG-20260616-WA0060.jpg', title: 'Diademas de Tela con Figuras de Peluche', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 61, img: 'IMG-20260616-WA0061.jpg', title: 'Delineador de Ojos y Cejas 36H Favorbeauty', pieza: 12, caja: 254 },
    { id: 62, img: 'IMG-20260616-WA0062.jpg', title: 'Brillo Labial Voluminizador Lip Gloss Favorbeauty', pieza: 10, caja: 219 },
    { id: 63, img: 'IMG-20260616-WA0063.jpg', title: 'Pomada para Cejas Brow Cream Favorbeauty', pieza: 22, caja: 236 },
    { id: 64, img: 'IMG-20260616-WA0064.jpg', title: 'Delineador 36H Super Waterproof Orejas de Gato', pieza: 8, caja: 175 },
    { id: 65, img: 'IMG-20260616-WA0065.jpg', title: 'Broches para Cabello con Glitter', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 66, img: 'IMG-20260616-WA0066.jpg', title: 'Brillo Labial Galaxy Gloss con Llavero Favorbeauty', pieza: 27, caja: 280, categoria: 'accesorios' },
    { id: 67, img: 'IMG-20260616-WA0067.jpg', title: 'Kit de Pestañas 3D Faux Mink Dingsen Favorbeauty', unica: 60 },
    { id: 68, img: 'IMG-20260616-WA0068.jpg', title: 'Máscara de Pestañas Make It Big Bold Black Favorbeauty', pieza: 13, caja: 271 },
    { id: 69, img: 'IMG-20260616-WA0069.jpg', title: 'Bolsas de Regalo Diseño Hada', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 70, img: 'IMG-20260616-WA0070.jpg', title: 'Fijador de Maquillaje Stay Cool Spray Favorbeauty', pieza: 26, caja: 271 },
    { id: 71, img: 'IMG-20260616-WA0071.jpg', title: 'Perfume de Bolsillo Hello Kitty Romantic Favorbeauty', pieza: 13, caja: 271 },
    { id: 72, img: 'IMG-20260616-WA0072.jpg', title: 'Kit de Pestañas DIY Cluster Lashes Favorbeauty', unica: 60 },
    { id: 73, img: 'IMG-20260616-WA0073.jpg', title: 'Set de Brochas Favor Beauty Verde y Morado', paquete: 36, categoria: 'accesorios' },
    { id: 74, img: 'IMG-20260616-WA0074.jpg', title: 'Gel Máscara para Cejas y Pestañas Transparente Favorbeauty', pieza: 13, caja: 271 },
    { id: 75, img: 'IMG-20260616-WA0075.jpg', title: 'Cortauñas Hai Shun Advanced', pieza: 6, caja: 58 },
    { id: 76, img: 'IMG-20260616-WA0076.jpg', title: 'Moños con Brillos en Tira', pieza: 13, tira: 66 },
    { id: 77, img: 'IMG-20260616-WA0077.jpg', title: 'Máscara de Pestañas Wrap Lash Mega Extension Favorbeauty', pieza: 15, caja: 315 },
    { id: 78, img: 'IMG-20260616-WA0078.jpg', title: 'Moño Brillante con Lentejuelas en Tira HT-3537', pieza: 9, tira: 96 },
    { id: 79, img: 'IMG-20260616-WA0079.jpg', title: 'Delineador en Gel 36H Favorbeauty', pieza: 9, caja: 185 },
    { id: 80, img: 'IMG-20260616-WA0080.jpg', title: 'Tira de Moños con Mariposa para el Cabello', pieza: 11, tira: 58, categoria: 'accesorios' },
    { id: 81, img: 'IMG-20260616-WA0081.jpg', title: 'Tira de Moños con Listón y Brillos', pieza: 11, tira: 58, categoria: 'accesorios' },
    { id: 82, img: 'IMG-20260616-WA0082.jpg', title: 'Esponjas de Maquillaje Colores Pastel', pieza: 7, docena: 70, categoria: 'accesorios' },
    { id: 83, img: 'IMG-20260616-WA0083.jpg', title: 'Set de Pinceles para Uñas', docena: 210, paquete: 20, categoria: 'accesorios' },
    { id: 84, img: 'IMG-20260616-WA0084.jpg', title: 'Diademas de Peluche con Moño', pieza: 15, docena: 157, categoria: 'accesorios' },
    { id: 85, img: 'IMG-20260616-WA0085.jpg', title: 'Horquillas con Glitter Zhendong', pieza: 7, docena: 66, categoria: 'accesorios' },
    { id: 86, img: 'IMG-20260616-WA0086.jpg', title: 'Uñas Postizas Romantic Myth', pieza: 14, docena: 149 },
    { id: 87, img: 'IMG-20260616-WA0087.jpg', title: 'Ligas para Cabello Donas de Tela', pieza: 5, docena: 49, categoria: 'accesorios' },
    { id: 88, img: 'IMG-20260616-WA0088.jpg', title: 'Pinzas para Cabello con Diseños Florales', pieza: 11, docena: 114, categoria: 'accesorios' },
    { id: 89, img: 'IMG-20260616-WA0089.jpg', title: 'Moños de Satín con Hebilla de Pedrería y Perla', pieza: 14, docena: 149 },
    { id: 90, img: 'IMG-20260616-WA0090.jpg', title: 'Donas de Peluche con Moño en Tira', pieza: 11, tira: 114, categoria: 'accesorios' },
    { id: 91, img: 'IMG-20260616-WA0091.jpg', title: 'Donas de Peluche con Moño en Tira', pieza: 12, tira: 61, categoria: 'accesorios' },
    { id: 92, img: 'IMG-20260616-WA0092.jpg', title: 'Tira de Moños con Pedrería Colores Pastel', pieza: 8, tira: 79, categoria: 'accesorios' },
    { id: 93, img: 'IMG-20260616-WA0093.jpg', title: 'Llavero Carita Feliz con Pedrería', categoria: 'accesorios' },
    { id: 94, img: 'IMG-20260616-WA0094.jpg', title: 'Máscara de Pestañas Prosa 4 en Uno', pieza: 45, mayoreo: 35 },
    { id: 95, img: 'IMG-20260616-WA0095.jpg', title: 'Broches para Cabello con Figuras Xingyihan', pieza: 6, tira: 49, categoria: 'accesorios' }
];

const IMAGE_BASE = 'assets/images/';

function getImagePath(fileName) {
    if (!fileName) return '';
    if (/^https?:\/\//i.test(fileName) || fileName.startsWith('data:')) return fileName;
    return IMAGE_BASE + fileName;
}

function inferCategory(product) {
    if (product.categoria) return product.categoria;

    const title = product.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    if (/labial|lip|gloss|balsamo|brillo|vaselina/.test(title)) return 'labiales';
    if (/rubor|blush/.test(title)) return 'rubores';
    if (/pestana|lash|mascara|rimel|delineador/.test(title)) return 'pestañas';
    if (/ceja|brow/.test(title)) return 'cejas';
    if (/base|foundation|polvo compacto|polvo traslucido|polvo iluminador/.test(title)) return 'bases';
    if (/perfume|fragancia|body mist/.test(title)) return 'perfumes';
    if (/mono|pinza|llavero|liga|diadema|cortaunas|esponja|bolsa|pincel|brocha|una|accesorio/.test(title)) return 'accesorios';
    return 'todos';
}

function getCategoryMeta(product) {
    const id = inferCategory(product);
    return CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
}

function getPrices(product) {
    return Object.entries(PRICE_LABELS)
        .filter(([key]) => product[key])
        .map(([key, label]) => ({ key, label, value: Number(product[key]) }));
}

function getCartPrice(product) {
    const price = product.unica || product.pieza || product.paquete || product.docena || product.caja || product.tira || product.mayoreo || 0;
    return Number(price);
}

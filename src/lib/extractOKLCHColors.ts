import { rgb2oklch } from "colorizr";
import ColorThief from 'colorthief';

function rgbToObject(rgb: any) {
	return {
		r: rgb[0],
		g: rgb[1],
		b: rgb[2],
	};
}

function convertRGBToOKLCH(rgb: any, normaliseLightness: any = 0, normaliseChroma: any = 0) {
	const oklchObj = rgb2oklch(rgbToObject(rgb));

    let oklchComputed = {
		l: oklchObj.l,
		c: oklchObj.c,
		h: oklchObj.h,
	};

	if (normaliseLightness) {
		oklchComputed.l = normaliseLightness;
	}

    if (normaliseChroma) {
		oklchComputed.c = (Math.pow((oklchComputed.c * 100), normaliseChroma) / 100);
	}

	return [oklchComputed.l, oklchComputed.c, oklchComputed.h];
}

function sortOKLCH(colors: any) {
    const sortedOKLCH = colors.sort((a: any, b: any) => b[1] - a[1]);
    return sortedOKLCH.map((color: any) => {
        return `${color[0] * 100}% ${color[1] * 100}% ${color[2]}`;
    });
}

export async function extractOKLCHColors(imagePath: string) {
	const palette = await ColorThief.getPalette(`.${imagePath}`, 6, 10);
    const oklchPalette = sortOKLCH(palette.map((rgb: any) =>
		convertRGBToOKLCH(rgb, 0.5, 1.2),
	));
    return oklchPalette;
}


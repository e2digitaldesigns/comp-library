export const theme = {
  boxShadows: {
    small: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
    medium: "rgba(0, 0, 0, 0.15) 0px 4px 8px",
    large: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
    inset:
      "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
  },

  colors: {
    gray1: "#f3f3f3",
    gray2: "#ededed",
    gray3: "#e3e3e3",
    gray4: "#ddd",
    gray5: "#cfcfcf",
    gray6: "#bbb",

    borderColor: "#cfcfcf",
    transparentBackground: "rgb(225,225,225,20%)",
    inputBackgroundColor: "#fff",
    dailogBoxBgColor: "rgba(200, 200, 200, 0.2)",
    primary: "#0070f3",
    text: "#333",
    textHover: "#000",
    textActive: "#000",

    contentButton: "#bbb",
    buttonContentHover: "#999",
    contentButtonActive: "#999"
  }
};

export const darkTheme = {
  boxShadows: {
    small: "rgba(0, 0, 0, 0.3) 0px 2px 4px",
    medium: "rgba(0, 0, 0, 0.5) 0px 4px 8px",
    large: "rgba(0, 0, 0, 0.6) 0px 8px 24px",
    inset: "none"
  },

  colors: {
    gray1: "#333333",
    gray2: "#3d3d3d",
    gray3: "#4a4a4a",
    gray4: "#666666",
    gray5: "#7a7a7a",
    gray6: "#8e8e8e",

    borderColor: "#2a2a2a",
    transparentBackground: "rgb(225,225,225,20%)",
    inputBackgroundColor: "#1a1a1a",
    dailogBoxBgColor: "rgba(0, 0, 0, 0.85)",
    primary: "#3f9cfb",
    text: "#bbb",
    textHover: "#fff",
    textActive: "#fff",

    contentButton: "#4a4a4a",
    buttonContentHover: "#999",
    contentButtonActive: "#ccc"
  }
};

// function createGreyScale(shades: number) {
// 	const grayScale: { [key: string]: string } = {};

// 	for (let i = 1; i < shades; i++) {
// 		const value = Math.round(255 * (i / shades))
// 			.toString(16)
// 			.padStart(2, "0");
// 		grayScale[`gray${i}`] = `#${value}${value}${value}`;
// 	}

// 	console.log(grayScale);

// 	return grayScale;
// }

// createGreyScale(40);

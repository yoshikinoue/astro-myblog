import satori, { type SatoriOptions } from "satori";
import { SITE } from "@config";
import { writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import { safeFilename } from "./safeFilename";

const fetchGoogleFont = async (weight: number): Promise<ArrayBuffer> => {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      // Use a legacy User-Agent so Google Fonts returns TTF/OTF supported by Satori
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then(res => res.text());

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );
  if (!resource || !resource[1]) {
    throw new Error(`Failed to parse Google Font URL for weight ${weight}`);
  }
  return fetch(resource[1]).then(res => res.arrayBuffer());
};

const fetchFonts = async () => {
  const [fontRegular, fontBold] = await Promise.all([
    fetchGoogleFont(400),
    fetchGoogleFont(700),
  ]);

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const ogImage = (text: string) => {
  return (
    <div
      style={{
        background: "#fefbfb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: "4px solid #000",
          background: "#ecebeb",
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: "4px solid #000",
          background: "#fefbfb",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              maxHeight: "84%",
              overflow: "hidden",
            }}
          >
            {text}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
            }}
          >
            <span>
              by{" "}
              <span
                style={{
                  color: "transparent",
                }}
              >
                "
              </span>
              <span style={{ overflow: "hidden", fontWeight: "bold" }}>
                {SITE.author}
              </span>
            </span>

            <span style={{ overflow: "hidden", fontWeight: "bold" }}>
              {SITE.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "Noto Sans JP",
      data: fontRegular,
      weight: 400,
      style: "normal",
    },
    {
      name: "Noto Sans JP",
      data: fontBold,
      weight: 700,
      style: "normal",
    },
  ],
};

const generateOgImage = async (mytext = SITE.title, filenameSlug = mytext) => {
  const svg = await satori(ogImage(mytext), options);

  // render png in production mode
  if (import.meta.env.MODE === "production") {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    const filename = safeFilename(filenameSlug);

    await writeFile(`./dist/${filename}.png`, pngBuffer);
  }

  return svg;
};

export default generateOgImage;

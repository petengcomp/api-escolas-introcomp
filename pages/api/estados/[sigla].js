import NextCors from 'nextjs-cors';

import dataES from "../../../estados/sudeste/es/data";
import dataMG from "../../../estados/sudeste/mg/data";
import dataRJ from "../../../estados/sudeste/rj/data";
import dataSP from "../../../estados/sudeste/sp/data";

import dataSC from "../../../estados/sul/sc/data";
import dataRS from "../../../estados/sul/rs/data";
import dataPR from "../../../estados/sul/pr/data";

import dataAC from "../../../estados/norte/ac/data";
import dataAM from "../../../estados/norte/am/data";
import dataAP from "../../../estados/norte/ap/data";
import dataPA from "../../../estados/norte/pa/data";
import dataRO from "../../../estados/norte/ro/data";
import dataRR from "../../../estados/norte/rr/data";
import dataTO from "../../../estados/norte/to/data";

import dataAL from "../../../estados/nordeste/al/data";
import dataBA from "../../../estados/nordeste/ba/data";
import dataCE from "../../../estados/nordeste/ce/data";
import dataMA from "../../../estados/nordeste/ma/data";
import dataPB from "../../../estados/nordeste/pb/data";
import dataPE from "../../../estados/nordeste/pe/data";
import dataPI from "../../../estados/nordeste/pi/data";
import dataRN from "../../../estados/nordeste/rn/data";
import dataSE from "../../../estados/nordeste/se/data";

import dataDF from "../../../estados/centro-oeste/df/data";
import dataGO from "../../../estados/centro-oeste/go/data";
import dataMS from "../../../estados/centro-oeste/ms/data";
import dataMT from "../../../estados/centro-oeste/mt/data";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { sigla } = req.query;
  switch (sigla) {
    case "es":
      res.status(200).json({ name: dataES });
      break;
    case "rj" || "RJ":
      res.status(200).json({ name: dataRJ });
      break;
    case "mg" || "MG":
      res.status(200).json({ name: dataMG });
      break;
    case "sp" || "SP":
      res.status(200).json({ name: dataSP });
      break;
    case "sc":
      res.status(200).json({ name: dataSC });
      break;
    case "rs":
      res.status(200).json({ name: dataRS });
      break;
    case "pr":
      res.status(200).json({ name: dataPR });
      break;
    case "ac":
      res.status(200).json({ name: dataAC });
      break;
    case "am":
      res.status(200).json({ name: dataAM });
      break;
    case "ap":
      res.status(200).json({ name: dataAP });
      break;
    case "pa":
      res.status(200).json({ name: dataPA });
      break;
    case "ro":
      res.status(200).json({ name: dataRO });
      break;
    case "rr":
      res.status(200).json({ name: dataRR });
      break;
    case "to":
      res.status(200).json({ name: dataTO });
      break;
    case "al":
      res.status(200).json({ name: dataAL });
      break;
    case "ba":
      res.status(200).json({ name: dataBA });
      break;
    case "ce":
      res.status(200).json({ name: dataCE });
      break;
    case "ma":
      res.status(200).json({ name: dataMA });
      break;
    case "pb":
      res.status(200).json({ name: dataPB });
      break;
    case "pe":
      res.status(200).json({ name: dataPE });
      break;
    case "pi":
      res.status(200).json({ name: dataPI });
      break;
    case "rn":
      res.status(200).json({ name: dataRN });
      break;
    case "se":
      res.status(200).json({ name: dataSE });
      break;
    case "df":
      res.status(200).json({ name: dataDF });
      break;
    case "go":
      res.status(200).json({ name: dataGO });
      break;
    case "ms":
      res.status(200).json({ name: dataMS });
      break;
    case "mt":
      res.status(200).json({ name: dataMT });
      break;
    default:
      res.status(400).json({ name: 'Houve um erro, tente digitar a sigla do estado. Ex: es, rj, mg' });
  }
}

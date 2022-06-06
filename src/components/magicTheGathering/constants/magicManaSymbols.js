import { Image } from "react-bootstrap";

function magicManaSymbols(manaString) {
  var temp = manaString;
  var Bcount = (temp.match(/B/g) || []).length;
  var Ccount = (temp.match(/C/g) || []).length;
  var Gcount = (temp.match(/G/g) || []).length;
  var Rcount = (temp.match(/R/g) || []).length;
  var Ucount = (temp.match(/U/g) || []).length;
  var Wcount = (temp.match(/W/g) || []).length;
  var Xcount = (temp.match(/X/g) || []).length;
  var Onecount = (temp.match(/1/g) || []).length;
  var Twocount = (temp.match(/2/g) || []).length;
  var Threecount = (temp.match(/3/g) || []).length;

  var symbolArray = [];

  for (var one = 0; one < Onecount; one++) {
    symbolArray.push("/magicSymbols/1.png");
  }
  for (var two = 0; two < Twocount; two++) {
    symbolArray.push("/magicSymbols/2.png");
  }
  for (var three = 0; three < Threecount; three++) {
    symbolArray.push("/magicSymbols/3.png");
    for (var b = 0; b < Bcount; b++) {
      symbolArray.push("/magicSymbols/B.png");
    }

    for (var c = 0; c < Ccount; c++) {
      symbolArray.push("/magicSymbols/C.png");
    }
    for (var g = 0; g < Gcount; g++) {
      symbolArray.push("/magicSymbols/G.png");
    }
    for (var r = 0; r < Rcount; r++) {
      symbolArray.push("/magicSymbols/R.png");
    }
    for (var u = 0; u < Ucount; u++) {
      symbolArray.push("/magicSymbols/U.png");
    }

    for (var w = 0; w < Wcount; w++) {
      symbolArray.push("/magicSymbols/W.png");
    }
    for (var x = 0; x < Xcount; x++) {
      symbolArray.push("/magicSymbols/X.png");
    }
  }
 
  return (
    <>
      {symbolArray?.map((url) => (
        <td>
          <Image src={url} alt="manasymb" fluid />
        </td>
      ))}
    </>
  );
}

export default magicManaSymbols;

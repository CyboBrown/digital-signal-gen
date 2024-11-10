import { useState } from "react";
import Table from "react-bootstrap/Table";

function SignalTable({ code }: { code: string }) {
  let codeArray = Array.from(code).filter((bit) => bit === "0" || bit === "1");
  let change_on_zero: Array<boolean> = codeArray.reduce((acc, item, index) => {
    // nrzi or bami or dfmn
    return item === "0"
      ? acc.concat(acc[index - 1] || false)
      : item === "1"
      ? acc.concat(!(acc[index - 1] || false))
      : acc;
  }, [] as boolean[]);
  let change_on_one: Array<boolean> = codeArray.reduce((acc, item, index) => {
    // pstr
    return item === "1"
      ? acc.concat(acc[index - 1] || false)
      : item === "0"
      ? acc.concat(!(acc[index - 1] || false))
      : acc;
  }, [] as boolean[]);

  return (
    <Table borderless responsive variant="light">
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th></th>
          <th className="border-end" style={{ textAlign: "left" }}>
            Encoding Technique
          </th>
          {codeArray.map((item) => (
            <>
              <th className="border-end border-bottom border-top" colSpan={2}>
                {item}
              </th>
            </>
          ))}
          <th className="border-start"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
        <tr>
          <td></td>
          <td className={codeArray[0] === "0" ? "border-end" : ""}>NRZ-L</td>
          {codeArray.map((item, index, array) => (
            <td
              colSpan={2}
              className={
                (item === "0"
                  ? "border-bottom"
                  : item === "1"
                  ? "border-top"
                  : "") +
                ((index == 0 ? "0" : array[index - 1]) !== item
                  ? " border-start"
                  : " ") +
                " border-black"
              }
            ></td>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
        <tr>
          <td></td>
          <td className={codeArray[0] === "0" ? "border-end" : ""}>NRZ-I</td>
          {codeArray.map((item, index, array) => (
            <td
              colSpan={2}
              className={
                (change_on_zero[index] === false
                  ? "border-bottom"
                  : "border-top") +
                (array[index] === "1" ? " border-start" : "") +
                " border-black"
              }
            ></td>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
        <tr>
          <td rowSpan={2}></td>
          <td className="border-end" rowSpan={2}>
            Bipolar AMI
          </td>
          {codeArray.map((item, index) => (
            <td
              colSpan={2}
              rowSpan={1}
              className={
                (item === "0"
                  ? "border-bottom"
                  : item === "1"
                  ? !change_on_zero[index]
                    ? ""
                    : "border-top border-start border-end"
                  : "") + " border-black"
              }
            ></td>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          {codeArray.map((item, index) => (
            <td
              colSpan={2}
              rowSpan={1}
              className={
                (item === "1"
                  ? change_on_zero[index]
                    ? ""
                    : "border-bottom border-start border-end"
                  : "") + " border-black"
              }
            ></td>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
        <tr>
          <td rowSpan={2}></td>
          <td className="border-end" rowSpan={2}>
            Pseudoternary
          </td>
          {codeArray.map((item, index) => (
            <td
              colSpan={2}
              rowSpan={1}
              className={
                (item === "1"
                  ? "border-bottom"
                  : item === "0"
                  ? !change_on_one[index]
                    ? ""
                    : "border-top border-start border-end"
                  : "") + " border-black"
              }
            ></td>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          {codeArray.map((item, index) => (
            <td
              colSpan={2}
              rowSpan={1}
              className={
                (item === "0"
                  ? change_on_one[index]
                    ? ""
                    : "border-bottom border-start border-end"
                  : "") + " border-black"
              }
            ></td>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr></tr>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
        <tr>
          <td></td>
          <td className="border-end">Manchester</td>
          {codeArray.map((item, index, array) => (
            <>
              <td
                className={
                  (item === "0"
                    ? "border-top"
                    : item === "1"
                    ? "border-bottom"
                    : "") +
                  (array[index - 1] === item ? " border-start" : " ") +
                  " border-black"
                }
              ></td>
              <td
                className={
                  (item === "0"
                    ? "border-bottom"
                    : item === "1"
                    ? "border-top"
                    : "") + " border-start border-black"
                }
              ></td>
            </>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
        <tr>
          <td></td>
          <td className={codeArray[0] === "1" ? "border-end" : ""}>
            Differential Manchester
          </td>
          {codeArray.map((item, index, array) => (
            <>
              <td
                className={
                  (item === "0" ? "border-start" : "") +
                  (change_on_zero[index] === true
                    ? " border-top"
                    : " border-bottom") +
                  " border-black"
                }
              ></td>
              <td
                className={
                  (change_on_zero[index] === true
                    ? "border-bottom"
                    : "border-top") + " border-start border-black"
                }
              ></td>
            </>
          ))}
          <td className="border-start"></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 3}></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SignalTable;

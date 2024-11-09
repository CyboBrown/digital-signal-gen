import Table from "react-bootstrap/Table";

function SignalTable({ code }: { code: string }) {
  let codeArray = Array.from(code).filter((bit) => bit === "0" || bit === "1");

  return (
    <Table borderless hover variant="light">
      <thead>
        <tr>
          <th>Encoding Technique</th>
          {codeArray.map((item) => (
            <>
              <th colSpan={2}>{item}</th>
            </>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
        <tr>
          <td>NRZ-L</td>
          {codeArray.map((item, index, array) => (
            <td
              colSpan={2}
              className={
                (item === "0"
                  ? "border-bottom"
                  : item === "1"
                  ? "border-top"
                  : "") +
                (array[index - 1] !== item && index != 0
                  ? " border-start"
                  : " ") +
                " border-black"
              }
            ></td>
          ))}
          <td></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
        <tr>
          <td>NRZ-I</td>
          {codeArray.map((item) => (
            <td
              colSpan={2}
              className={
                item === "0"
                  ? "border-bottom border-black"
                  : item === "1"
                  ? "border-top border-black"
                  : ""
              }
            ></td>
          ))}
          <td></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
        <tr>
          <td>Bipolar AMI</td>
          {codeArray.map((item) => (
            <td
              colSpan={2}
              className={
                item === "0"
                  ? "border-bottom border-black"
                  : item === "1"
                  ? "border-top border-black"
                  : ""
              }
            ></td>
          ))}
          <td></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
        <tr>
          <td>Pseudoternary</td>
          {codeArray.map((item) => (
            <td
              colSpan={2}
              className={
                item === "0"
                  ? "border-bottom border-black"
                  : item === "1"
                  ? "border-top border-black"
                  : ""
              }
            ></td>
          ))}
          <td></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
        <tr>
          <td>Manchester</td>
          {codeArray.map((item) => (
            <td
              colSpan={2}
              className={
                item === "0"
                  ? "border-bottom border-black"
                  : item === "1"
                  ? "border-top border-black"
                  : ""
              }
            ></td>
          ))}
          <td></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
        <tr>
          <td>Differential Manchester</td>
          <td className="border-top border-start border-black"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={code.length * 2 + 2}></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SignalTable;

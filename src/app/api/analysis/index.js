import { v4 as uuidv4 } from "uuid";

export default function analysisRequest(req, res) {
  if (req.method == "POST") {
    const { code, framework, tool } = req.body;
    const analysisId = uuidv4();

    const decodedCode = Buffer.from(code, "base64").toString("utf-8");
    // "TODO" : analysis logic from tool and framework with decoded code from LLM, CodeQL

    res.status(200).json({
      analysisId: analysisId,
      status: "Submitted",
      message: "Successfully requested.",
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

/* POST BODY part
const code = btoa('put the code here'); //gonna be changed to ASCII code of encoding base64

fetch('http://localhost:3000/app/api/analysis', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify({
    code: code,
    framework: 'flask',
    tool: 'codeql'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
*/

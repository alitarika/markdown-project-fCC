import './App.css';
import { marked } from "marked";
import { useState} from "react";

function App() {
  const [text, setText] = useState(`
  ---
  # This page will help you utilize a Markdown Previewer!
  ---

  ## Let's look how you can use to make this site work!

  ### Type in left and preview in the right side of the screen.

  To do that just use hashtags for h1 one hashtag for h2 two hashtags and so on.

  If you do not put anything before the text is it is p tag which is plain text.

  For *italic*, use asterisks around the text.
  For **bold**, use two asterisks each at the start and at the end.
  For ***both italic and bold***, use three asterisks each.

  >For block quotes:
  >
  > You can use bigger than symbol '>'.
  
  You can utilize links with the brackets and paranthesis. For instance [random quote generator](https://alitarika.github.io/quote-generator-random/)

  You can markdown codes with backticks like this: \`<p>Hello World!<p>\`.

  For multiline codes use lots of backticks:

${"```"}
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
${"```"}

To create an ordered list, use number dot item format like this:
1. item no1
2. item no2
3. item no3

To create an unorder list, use hyphen like this:
- unordered item
- unordered item

You can also put images like this:
![your alt text](https://t3.ftcdn.net/jpg/05/72/08/28/360_F_572082883_sJLjuqnS9xd7FNb7ARgBfIDjncmHo7ZC.jpg)
  `);

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="container row">
      <textarea className="col-md-5 col-12 bg-dark text-success"
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <div id= "preview" className="col-md-7 col-12" dangerouslySetInnerHTML={{__html: marked.parse(text)}}/>
    </div>
  );
}

export default App;

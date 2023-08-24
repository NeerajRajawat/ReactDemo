//hooks
import { useState } from "react";

//state-less
function TextAnalsis() {
  const [data, setData] = useState("Enter Text");
  //to convert data into uppercase
  const ToUpperCase = () => {
    let newData = data.toUpperCase();
    setData(newData);
  };

  const ToLowerCase = () => {
    let newData = data.toLowerCase();
    setData(newData);
  };

  const onChangeEventhandler = (event) => {
    setData(event.target.value);
  };

  const clearData = () => {
    setData("");
  };
  return (
    <div className="container my-5">
      <h1 className="text-bg-warning my-2 p-2">Text Analysis</h1>
      <textarea
        rows="12"
        className="form-control"
        value={data}
        onChange={onChangeEventhandler}
      ></textarea>
      <button className="btn btn-info m-3" onClick={ToUpperCase}>
        ToUpperCase
      </button>
      <button className="btn btn-info m-3" onClick={ToLowerCase}>
        ToLowerCase
      </button>
      <button className="btn btn-info m-3" onClick={clearData}>
        Clear
      </button>
      <div className="container">
        <div className="card mb-4">
          <h3 className="text-bg-info card-heading">Text Summary</h3>
          <p className="card-body">
            Word Count={data.split(" ").length}. Charcater Count:{data.length}
          </p>
        </div>
        <h1 className="text-bg-danger">Preview</h1>
        <h5>{data}</h5>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header text-bg-dark">What is Word counter</div>
          <div className="card-body">
            <p>
              Apart from counting words and characters, our online editor can
              help you to improve word choice and writing style, and,
              optionally, help you to detect grammar mistakes and plagiarism. To
              check word count, simply place your cursor into the text box above
              and start typing. You'll see the number of characters and words
              increase or decrease as you type, delete, and edit them. You can
              also copy and paste text from another program over into the online
              editor above. The Auto-Save feature will make sure you won't lose
              any changes while editing, even if you leave the site and come
              back later. Tip: Bookmark this page now. Knowing the word count of
              a text can be important. For example, if an author has to write a
              minimum or maximum amount of words for an article, essay, report,
              story, book, paper, you name it. WordCounter will help to make
              sure its word count reaches a specific requirement or stays within
              a certain limit. In addition, WordCounter shows you the top 10
              keywords and keyword density of the article you're writing. This
              allows you to know which keywords you use how often and at what
              percentages. This can prevent you from over-using certain words or
              word combinations and check for best distribution of keywords in
              your writing. In the Details overview you can see the average
              speaking and reading time for your text, while Reading Level is an
              indicator of the education level a person would need in order to
              understand the words you’re using. Disclaimer: We strive to make
              our tools as accurate as possible but we cannot guarantee it will
              always be so.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAnalsis;

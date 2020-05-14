function topbar({ text }) {
    // introText, ContactImgUrl
    return (
        <div className="container">
            <div className="text-container">
                <p>{text}</p>
            </div>
            <style jsx>{`
          .container {
            width: 100%;
            height: 100%;
            padding: 4px;
          }
  
          .text-container {
            text-align: left;
            -- border: 1px solid red;
            height: 100%;
            font-family: inherit;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 28px;
            text-indent: 10px;
            color: #000000;
          }
        `}</style>
        </div>
    )
}

export default topbar

// /* Intro text */

// position: absolute;
// width: 521px;
// height: 200px;
// left: 8px;
// top: 48px;

// border: 1px solid #808080;
// box-sizing: border-box;

// /* Contact */

// position: absolute;
// width: 185px;
// height: 200px;
// left: 533px;
// top: 48px;

// border: 1px solid #808080;
// box-sizing: border-box;

// /* Header 1 */

// position: absolute;
// height: 40px;
// left: 1.46%;
// right: 18.66%;
// top: calc(50% - 40px/2 - 103.5px);

// font-family: Abhaya Libre Medium;
// font-style: normal;
// font-weight: 500;
// font-size: 36px;
// line-height: 40px;
// /* identical to box height, or 111% */

// letter-spacing: 1px;

// color: #182026;

// /* Button success */

// position: absolute;
// left: 86.53%;
// right: 2.29%;
// top: 3.75%;
// bottom: 85.02%;

// /* Main image here */

// position: absolute;
// width: 145px;
// height: 28px;
// left: 72px;
// top: 43px;

// font-family: Yaldevi Colombo;
// font-style: normal;
// font-weight: normal;
// font-size: 21px;
// line-height: 28px;
// /* identical to box height */

// text-indent: 10px;
// text-transform: lowercase;

// color: #000000;

// /* Rectangle 49 */

// position: absolute;
// width: 360px;
// height: 267px;
// left: 0px;
// top: 0px;

// background: url(.jpg), #C4C4C4;

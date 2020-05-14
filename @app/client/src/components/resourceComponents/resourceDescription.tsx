function description({ text }) {
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

export default description

import { FunctionComponent } from "react";

export const Instructions: FunctionComponent = () => {
  return (
    <div className="Instructions">
      <div className="Header">
        <div className="Logo">
          <img
            height="30"
            src="https://app.baseten.co/static/Baseten_Logo_Primary_Symbol.svg"
          />
        </div>
        <div className="Text">Take Home Challenge</div>
      </div>
      <blockquote>
        Please checkout README.md for instructions on the challenge
      </blockquote>
    </div>
  );
};

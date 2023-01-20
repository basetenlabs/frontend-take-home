import React, { FunctionComponent } from "react";

type SelectedOutputProps = {
  selected: string;
};

export const SelectedOutput: FunctionComponent<SelectedOutputProps> = ({
  selected = "Nothing selected",
}) => {
  const selectedString = selected.toString();
  return (
    <div className="Output" data-cy="selected-output">
      <p>Selected Output:</p>
      <p>{selectedString}</p>
    </div>
  );
};

import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ReactElement, ReactNode } from "react";

const masqueCssProps: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'grid',
  placeContent: 'center',
  overflow: 'hidden',
};

type MasqueProps = {
  index: number,
  children: ReactNode,
}

export function Masque(props: MasqueProps): ReactElement {
  return (
    <div style={Object.assign({zIndex: props.index}, masqueCssProps)}>
      {props.children}
    </div>
  );
}
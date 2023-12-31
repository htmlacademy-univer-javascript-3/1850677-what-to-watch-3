type PlayerStateProps = {
  viewBox: string;
  width: number;
  height: number;
  xlinkHref: string;
  state: string;
}

export function PlayerState(props: PlayerStateProps) {
  return (
    <>
      <svg viewBox={props.viewBox} width={props.width} height={props.height}>
        <use xlinkHref={props.xlinkHref} />
      </svg>
      <span>{props.state}</span>
    </>
  );
}

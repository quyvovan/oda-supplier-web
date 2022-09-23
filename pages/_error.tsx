interface IErrorProp {
  statusCode: number;
}
interface IErrorInitialProp {
  res: {
    statusCode: number;
  };
  err: {
    statusCode: number;
  };
}
const Error = ({ statusCode }: IErrorProp) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

Error.getInitialProps = ({ res, err }: IErrorInitialProp) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else {
    statusCode = err ? err.statusCode : 404;
  }
  return { statusCode };
};

export default Error;

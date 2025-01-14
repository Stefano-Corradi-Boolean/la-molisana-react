

const Alert = (props) => {
  const { message, type } = props;

  return (
    <div className="alert-container">
      <div className={`alert ${type || 'info'}`}>{message}</div>
    </div>
  )
}

export default Alert

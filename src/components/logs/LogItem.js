import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log._id);
    M.toast({ html: "Log deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}>
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          Last updated by <span className="black-text">{log.tech}</span> on{" "}
          <span className="black-text">
            <Moment format="DD.M.YYYY, HH:mm:ss">{log.date}</Moment>
          </span>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
      <div className="grey-text" style={{ fontSize: "10px" }}>
        ID {log._id}
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);

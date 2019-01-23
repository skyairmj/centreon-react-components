import React, { Component } from "react";

class FileUploadItem extends Component {
  render() {
    const {
      icon,
      iconStatus,
      title,
      titleStatus,
      info,
      infoStatus,
      infoStatusLabel,
      progressBar
    } = this.props;
    return (
      <React.Fragment>
        <div className="file-upload-item">
          {icon ? <span className={`file-upload-item-icon ${icon} ${iconStatus}`} /> : null}
          <span className={`file-upload-item-title ${titleStatus}`}>{title}</span>
          {info ? <span className={`file-upload-item-info ${infoStatus}`}>
            {infoStatusLabel}
            {info}
          </span> : null}
          <span className="icon-close icon-close-small" />
          <div className="progress">
            <span className={`progress-bar ${progressBar}`} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FileUploadItem;

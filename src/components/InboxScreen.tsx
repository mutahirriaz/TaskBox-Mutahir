import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {TaskInterface} from './Task'
import { useSelector } from 'react-redux';
import TaskList from './TaskList/TaskList';

export function PureInboxScreen({ error }:any) {
    const defaultTasks=useSelector((state:TaskInterface[])=>state);
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList tasks={defaultTasks} loading={false} />
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }:any) => ({ error }))(PureInboxScreen);
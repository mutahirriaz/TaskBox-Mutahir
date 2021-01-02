import * as React from 'react';
import Task, { TaskInterface } from '../Task';
import {useSelector, useDispatch} from 'react-redux';
import {archive,pin,unpin} from '../../redux/Redux';
import "../../index.css"



export interface TaskListProps {
    loading: boolean;
    tasks: TaskInterface[];
    onPinTask?: any;
    onArchiveTask?: any;
    // handlesave: ()=> void
}

interface task {
    id: string;
    title: string;
    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";
  }

const TaskList: React.FC<TaskListProps> = ({ loading, tasks }) => {

    const dispatch = useDispatch();
  const reducer = useSelector((state) => state);
  console.log(reducer);

  function onPinTask(id: string) {
    dispatch(pin({ id: id }));
  }

  function onArchiveTask(id: string) {
    dispatch(archive({ id: id }));
  }

  function onUnpinTask(id: string) {
    dispatch(unpin({ id: id }));
  }


    const events = {
        onPinTask,
        onArchiveTask,
       
    };
    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const TasksInOrder = [
        ...tasks.filter(t =>t.state === "TASK_PINNED" ),

        ...tasks.filter(t => t.state !== "TASK_PINNED"),
        
    ]

    return (
        <div className = "list-items">
            {TasksInOrder.map((task , i) => {
                return (
                    <div key = {i}>
                        <Task key = {i}  task = {task} {...events} />
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList


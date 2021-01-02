import * as React from 'react';
import TaskList from '../components/TaskList/TaskList';
import * as TaskStories from '../stories/Task.stories';
import { Story, Meta } from "@storybook/react/types-6-0"
import { TaskListProps } from '../components/TaskList/TaskList'

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [(story: any) => <div style={{ padding: '3rem' }} >{story()}</div>]
} as Meta;



const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;
export const Default = Template.bind({});

Default.args = {
    tasks : [
        {...TaskStories.Default.args?.task, id : '6', title : "Task6", state : "Default"},
        {...TaskStories?.Default.args?.task, id : '1', title : "Task1", state : "Default"},
        {...TaskStories.Default.args?.task, id : '2', title : "Task2", state : "Default"},
        {...TaskStories.Default.args?.task, id : '3', title : "Task3", state : "Default"},
        {...TaskStories.Default.args?.task, id : '4', title : "Task4", state : "Default"},
        {...TaskStories.Default.args?.task, id : '5', title : "Task5", state : "Default"},
    ]
}
export const PinTask = Template.bind({});

PinTask.args = {
    tasks : [
        {...TaskStories.Default.args?.task, id : '6', title : "Task6", state : "TASK_PINNED"},
        {...TaskStories?.Default.args?.task, id : '1', title : "Task1", state : "Default"},
        {...TaskStories.Default.args?.task, id : '2', title : "Task2", state : "Default"},
        {...TaskStories.Default.args?.task, id : '3', title : "Task3", state : "Default"},
        {...TaskStories.Default.args?.task, id : '4', title : "Task4", state : "Default"},
        {...TaskStories.Default.args?.task, id : '5', title : "Task5", state : "Default"},
    ]
}

export const Loading = Template.bind({});

Loading.args = {
    tasks : [],
    loading : true
}

export const Empty = Template.bind({})

Empty.args = {
    ...Loading.args,
    loading : false
}
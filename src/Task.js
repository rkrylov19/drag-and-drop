import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export default class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provider, snapshot) => (
          <Container
            {...provider.draggableProps}
            // {...provider.dragHandleProps}
            innerRef={provider.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provider.dragHandleProps} />
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

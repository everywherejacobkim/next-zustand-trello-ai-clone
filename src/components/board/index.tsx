'use client';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

type Card = {
    id: string;
    title: string;
};

type List = {
    id: string;
    title: string;
    cards: Card[];
};

const Board = ({ lists }: { lists: List[] }) => {

    const [boardLists, setBoardLists] = useState(lists);

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;
    
        if (!destination) {
            return;
        }
    
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }
    
        const updatedLists = [...boardLists];
    
        const sourceList = updatedLists.find(list => list.id === source.droppableId);
        const destinationList = updatedLists.find(list => list.id === destination.droppableId);
    
        if (sourceList && destinationList) {
            const [draggedCard] = sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggedCard);
        }
    
        setBoardLists(updatedLists);
    };

    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
            <div className="flex gap-4">
                {boardLists.map((list, index) => (
                <Droppable droppableId={list.id} key={list.id}>
                    {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className="w-64 bg-gray-200 rounded p-4"
                    >
                        <h2 className="text-lg font-semibold mb-2">{list.title}</h2>
                        {list.cards.map((card, index) => (
                        <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white rounded p-2 shadow mb-2"
                            >
                                {card.title}
                            </div>
                            )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
                ))}
            </div>
            </DragDropContext>    
        </div>
    );
};

export default Board;
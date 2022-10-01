// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: "id1",
                    content:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet similique tenetur quibusdam illum atque soluta, maiores excepturi consequuntur itaque nobis id nam quo, optio aperiam inventore nihil incidunt nostrum rerum?",
                },
                {
                    id: "id2",
                    content:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet similique tenetur quibusdam illum atque soluta, maiores excepturi consequuntur itaque nobis id nam quo, optio aperiam inventore nihil incidunt nostrum rerum??",
                },
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime()
            let id = currentDate.toString()

            let note = {
                id,
                content: newNoteContent,
            };
            this.notes.unshift(note)
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => {
                return note.id !== idToDelete;
            })
        },
        updateNote(idToUpdate, content) {
            let index = this.notes.findIndex(note => { return note.id === idToUpdate });
            this.notes[index].content = content;
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => { return note.id === id })[0].content;
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length;
        },
        totalCharactersCount: (state) => {
            let count = 0;
            state.notes.forEach(note => {
                count += note.content.length;
            });
            return count;
        }
    }
})

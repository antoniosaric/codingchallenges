// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor( data, next = null ){
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data){
        if( this.head != null ){
            this.tail = this.head;
            this.head = new Node( data, this.head );
            this.size++;
        }else{
            this.head = new Node( data  );
            this.size++;
        }
    }


    sizze(){
        let node = this.head;
        let counter = 0;
        while( node ){
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;

        while(node){
            if( node.next == null ){
                return node;
            }
            node = node.next;
        }

        return null;


    }

    RemoveFirstt(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    clear(){
        this.head = null;
    }

    removeLastt(){
        let node = this.head;
        if( !this.head ){
            return;
        }

        if( !this.head.next ){
            this.head = null;
            return;
        }

        while( node ){
            if( node.next != null ){
                node.next.next == null ? node.next = null : null;
            }
            node = node.next;
        }
    }

    insertLastt( data ){

        const last = this.getLast();

        if( last ){
            last.next = new Node( data );
        }else{
            this.head = new Node( data )
        }
    }

    getAt( n ){
        let node = this.head;
        let index = 0;
        while( !!node ){
            if( index === n ){
                return node;
            }
            index++;
            node = node.next;
        }
        return null;
    }

    removeAt( n ){

        let size = this.sizze();

        if( size == 0 ){
            this.head = null;
            return;
        }

        if( size <= 1 && n > 0 || size == n ){
            this.removeLastt();
            return;
        }

        if( n == 0 && size > 0 ){
            this.RemoveFirstt();
            return;
        }

        this.getAt(n-1).next = this.getAt(n).next;
    }

    insertAt( data, n ){

        if ( n == 0 || !this.head){
            this.insertFirst( data );
            return;
        }

        let previous_node = this.getAt( n-1 ) || this.getLast();

        const new_node = new Node( data, previous_node.next )

        previous_node.next = new_node; 

    }

    forEach(){

        let node = this.head;

        while( node ){
            node.data = node.data + 10;
            node = node.next;
        }
    }



}

module.exports = { Node, LinkedList };


const Node = (value) => {
    return {value, next: null}
};

const LinkList = () => {
    let head = null

    const append = (value) =>{
        const newNode = Node(value);
        if(!head){
            head = newNode;
            return;
        }
        let current = head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }    

    const prepend = (value) =>{
        const newNode = Node(value);
        newNode.next = head;
        head = newNode;
    }    

    const size = () =>{
        let count = 0;
        let current = head
        while(current){
            count++;
            current = current.next;
        }

        return count;
    }    
    const getHead = ()=>{
        return head;
    }    
    const getTail=()=>{
        if (!head) return;
        let current = head;
        while(current.next){
            current=current.next
        }
        return current;
    }    
    const find=(value)=>{
        let current = head;
        while(current){
            if (current.value === value) return current;
            current = current.next;
        }

        return null

    }    
    const pop=()=>{
        if (!head) return null;

        if(!head.next){
            const value = head.value
            head = null;
            return value;
        }

        let current = head;
        let prev = null;
        while(current.next){
            prev = current;
            current = current.next;
        }

        prev.next = null;

        return current.value;

    }    
    const at=(index)=>{
        if (index < 0) return null;
        let current = head;
        let count = 0;

        while(current){
            if(count === index) return current;
            current = current.next;
            count++;
        }

        return null;
    }

    const remove=(value)=>{
        if (!head) return;

        if (head.value === value){
            head = head.next;
            return
        }
        let current =head;
        while (current.next){
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }

    const insertAt=(value, index)=>{
        if (index < 0 || index > size()) return;

        const newNode = Node(value);

        if (index === 0){
            newNode.next = head;
            head = newNode;
            return;
        }

        let current = head, prev = null, count = 0;

        while(count < index){
            prev = current;
            current = current.next;
            count++;
        }
        newNode.next = current;
        prev.next = newNode;
    }

    const removeAt=(index)=>{
        if (index < 0 || index >= size()) return;

        if (index === 0){
            head = head.next;
            return;
        }

        let current = head, prev = null, count = 0;

        while(count < index){
            prev = current;
            current = current.next;
            count++;
        }
        prev.next =current.next;
    }

    const print=()=>{
        let current = head;
        let result = '';
        while (current){
            result += `(${current.value}) -> `;
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }    

    return{append, prepend, size, getHead, getTail, find, pop, at,insertAt, removeAt, print,remove}
};    

const list = LinkList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('snake');
list.insertAt('hamster', 2)
console.log(list.find('parrot'));
list.print();
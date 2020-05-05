import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  describe('constructor', () => {
    it('creates a linked list from an array of values', () => {
      const linkedList = new LinkedList([1, 2, 3]);
      const { head } = linkedList; 
      expect(head.value).toEqual(1);
      expect(head.nextNode.value).toEqual(2);
      expect(head.nextNode.nextNode.value).toEqual(3);
    });
  });

  describe('toValueArray', () => {
    it('turns the linked list into an array', () => {
      const linkedList = new LinkedList([3, 3, 8]);
      expect(linkedList.toValueArray()).toEqual([3, 3, 8]);
    })
  });

  describe('reverse', () => {
    it('reverses the linked list', () => {
      let linkedList = new LinkedList([]);
      linkedList.reverse();
      expect(linkedList.toValueArray()).toEqual([]);

      linkedList = new LinkedList([1]);
      linkedList.reverse();
      expect(linkedList.toValueArray()).toEqual([1]);

      linkedList = new LinkedList([1, 2]);
      linkedList.reverse();
      expect(linkedList.toValueArray()).toEqual([2, 1]);

      linkedList = new LinkedList([1, 2, 3]);
      linkedList.reverse();
      expect(linkedList.toValueArray()).toEqual([3, 2, 1]);

      linkedList = new LinkedList([1, 2, 3, 4, 5, 6]);
      linkedList.reverse();
      expect(linkedList.toValueArray()).toEqual([6, 5, 4, 3, 2, 1]);
    });
  })
})

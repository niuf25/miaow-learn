public class ArrayList<E> {

    private static final int DEFAULT_CAPACITY = 10;

    private int size;
    private E[] list;

    public ArrayList() {
        doClear();
    }

    private void doClear() {
        size = 0;
        ensureCapacity(DEFAULT_CAPACITY);
    }

    @SuppressWarnings("unchecked")
    public void ensureCapacity(int newCapacity) {
        if (newCapacity < size) {
            return;
        }

        E[] old = list;
        list = (E[])new Object[ newCapacity] ;
        for (int i = 0; i < size; i++) {
            list[i] = old[i];
        }
    }

    public void clear() {
        doClear();
    }

    public int getSize() {
        return size;
    }

    public boolean IsEmpty() {
        return size == 0;
    }

    public void trimToSize() {
        ensureCapacity(size);
    }

    public E get(int idx) {
        if (idx < 0 || idx >= size) {
            throw new ArrayIndexOutOfBoundsException();
        }
        return list[idx];
    }

    public E set(int idx, E e) {
        if (idx < 0 || idx >= size) {
            throw new ArrayIndexOutOfBoundsException();
        }

        E old = list[idx];
        list[idx] = e;
        return old;
    }


}
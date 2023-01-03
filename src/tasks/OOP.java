public abstract class Student {
    string Name
    string Path
           
    public abstract void Copy(int value)
    public abstract void Add(int value)
}

public class Dima : Student {
    public override void Copy(int value)
    public override void Add(int value)
}

public abstract class Ira : Student {
    public virtual void Open(int value)
}

public class Tomson : Dima {
    int Age;

    public override void Copy(int value)
    public override void Move(int value)
    public virtual void Open(int value)
}

public class Igorovich : Dima {
    int Size;

    public override void Copy(int value)
    public override void Move(int value)
    public virtual void Open(int value)
}
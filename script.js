function Person(name){
    this.name=name;
};

Person.prototype.Introduce=function(){
    console.log(`Hello my name is ${this.name}`);
}

//Teacher Constructor
function Teacher(name,branch){
    Person.call(this,name);
    this.branch=branch;
}

//Set Prototype from Person to Teacher
Teacher.prototype=Object.create(Person.prototype);
//Set constructor
Teacher.prototype.constructor=Teacher;
Teacher.prototype.teach=function(){
    console.log(`I teach ${this.branch}`);
}

//Student Constructor
function Student(name,number){
    Person.call(this,name);
    this.number=number;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.study=function(){
    console.log(`my student number is ${this.number} and ı have already studied hard`)
}


// Headmaster Constructor
function HeadMaster(name,branch){
    Teacher.call(this,name,branch);

}

HeadMaster.prototype=Object.create(Teacher.prototype);
HeadMaster.prototype.constructor=HeadMaster;

HeadMaster.prototype.shareTask=function(){
    console.log(`ı have already shared all the work`);
}


let p1=new Person("Çınar");
p1.Introduce();


let t1 = new Teacher("sadık","matematik");
t1.Introduce();
t1.teach();

let s1=new Student("yiğit",100);
s1.Introduce();
s1.study();

let h1=new HeadMaster("ahmet","fizik");
h1.Introduce();
h1.teach();
h1.shareTask();
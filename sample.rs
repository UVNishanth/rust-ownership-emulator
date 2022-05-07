fn main(){
    let mut x = String::from("hello");
    let mut y = &mut x;
    x = String::from("beep");
    println!("{}", y);
}
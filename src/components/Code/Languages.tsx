const color = {
  dark: '#0000FF',
  light: '#FF0000',
}
export default [
  {
    value: '1',
    mode: 'text/x-csrc',
    label: 'C/C++',
    color,
    code: `#include<bits/stdc++.h>
using namespace std;

int main() {
  printf("What is your name? ")
  string name; cin >> name;
  cout << "hello " << name << endl;
  return 0;
}
`,
  },
  {
    value: '2',
    mode: 'javascript',
    label: 'Javascript',
    color,
    code: `function greet() { 
  let name = prompt("What is your name? "); 
  if (name !== null) { 
    document.getElementById("helloMessage").innerHTML = 
      "Hello " + name; 
  } 
}
`,
  },
  {
    value: '3',
    mode: 'python',
    label: 'Python',
    color,
    code: `name = input('What is your name? ')
print("Hello "+str(name))
`,
  },
  {
    value: '4',
    mode: 'xml',
    label: 'HTML',
    color,
    code: `<html>
  <head>
    <title> Hello page </title>
    <meta name="description" content="Greeting site" />
  </head>
  <body>
    <h1 id='helloMessage'> Hello whoever </h1>
  </body>
</html>
`,
  },
  {
    value: '5',
    mode: 'css',
    label: 'CSS',
    color,
    code: `#helloMessage {
  'color' : 'black';
  'width' : '50%';
}
`,
  },
  {
    value: '6',
    mode: 'python',
    label: 'Django',
    color,
    code: `from django.http import HttpResponse

def main_page(request):
  if request.method=='POST':
    data=json.loads(request.body)
    return StreamingHttpResponse('Hello'+str(data['name']))
  return StreamingHttpResponse('What is your name?')
`,
  },
  {
    value: '7',
    mode: 'shell',
    label: 'Shell',
    color,
    code: `read -p "What is your name? " name
echo "Hello $name"
echo ""
`,
  },
  {
    value: '8',
    mode: 'jsx',
    label: 'ReactJS',
    color,
    code: `export default () => {
  const [name, setName] = useState('')
  return (
    <>
    <Input onChange={(val:string)=>setName(val)}/>
    <Text> Hello {name} </Text>
    </>
  )
}
`,
  },
  {
    value: '9',
    mode: 'text/x-haskell',
    label: 'Haskell',
    color,
    code: `main = interact $ greet
greet :: String -> String
greet x = "Hello " ++ x ++ "!"
`,
  },
]

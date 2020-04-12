export default [
  { 
    value:'1',
    mode: 'text/x-csrc',
    label: 'C/C++',
    code : 
`#include<bits/stdc++.h>
using namespace std;

int main() {
  printf("What is your name? ")
  string name; cin >> name;
  cout << "hello " << name << endl;
  return 0;
}
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  { 
    value:'2',
    mode: 'javascript',
    label: 'Javascript',
    code : 
`function greet() { 
  let name = prompt("What is your name? "); 
  if (name !== null) { 
    document.getElementById("helloMessage").innerHTML = 
      "Hello " + name; 
  } 
}
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  { 
    value:'3',
    mode: 'python',
    label: 'Python',
    code : 
`name = input('What is your name? ')
print("Hello "+str(name))
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  { 
    value:'4',
    mode: 'xml',
    label: 'HTML',
    code : 
`<html>
  <head>
    <title> Hello page </title>
    <meta name="description" content="Greeting site" />
  </head>
  <body>
    <h1 id='helloMessage'> Hello whoever </h1>
  </body>
</html>
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  {
    value:'5',
    mode: 'css',
    label: 'CSS',
    code : 
`#helloMessage {
  'color' : 'black';
  'width' : '50%';
}
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  { 
    value:'6',
    mode: 'python',
    label: 'Django',
    code : 
`from django.http import HttpResponse

def main_page(request):
  if request.method=='POST':
    data=json.loads(request.body)
    return StreamingHttpResponse('Hello'+str(data['name']))
  return StreamingHttpResponse('What is your name?')
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  { 
    value:'7',
    mode: 'shell',
    label: 'Shell',
    code : 
`read -p "What is your name? " name
echo "Hello $name"
echo ""
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
  { 
    value:'8',
    mode: 'jsx',
    label: 'ReactJS',
    code : 
`export default () => {
  const [name, setName] = useState('')
  return (
    <>
    <Input onChange={(val:string)=>setName(val)}/>
    <Text> Hello {name} </Text>
    </>
  )
}
`,
    color: {
      dark : "#0000FF",
      light : "#FF0000",
    },
  },
]

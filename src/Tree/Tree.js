import {TreeWrapper,TreeItemWrapper,TreeContent,TreeIndent} from './styles'
export default function Tree({ treeData }) {
  return <TreeWrapper>
    <TreeItem/>
    <TreeItem/>
  </TreeWrapper>
}

function TreeItem() {
  return <TreeItemWrapper>
   <TreeIndent/>
    <TreeContent>
      123aklsdjalksdjklasdjalksdjklasjl
    </TreeContent>
  </TreeItemWrapper>
}

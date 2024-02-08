import {Container} from "./styled"
import logo from "../../assets/imgs/github-logo.png"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Item from "../../components/Item"
import { useEffect, useState } from "react"
import {api} from "../../utils/services/api"

const Home = () =>{

    const [currentRepo, setCurrentRepo] = useState('')

    const [repos, setRepos] = useState([])

    const handleSearchRepo = async () =>{
        const {data} = await api.get(`repos/${currentRepo}`)

        if (data.id){
            const isExists = repos.find((repo) => repo.id === data.id)
            if (!isExists){
                setRepos(prev => [...prev, data])
                setCurrentRepo('')
                return
            }
            
        }

        alert('Repositório não encontrado')
    }
    
    const handleRemoveRepo = (id) =>{
        const newRepos = repos.filter((item) => item.id !== id)
        setRepos(newRepos)
    }

    useEffect(() => {
        document.addEventListener('keydown', ({key}) =>{
            if(key === "Enter"){
                handleSearchRepo()
            }
        })
    }, [])


    return (
        <Container>
            <img
                src={logo}
                width={72}
                height={72}
                alt="Github logo"
            />
            <Input
                value = {currentRepo}
                onChange={(e) => setCurrentRepo(e.target.value)}
            />
            <Button
                onClick={handleSearchRepo}
            />
            {
                repos.map((repo) => <Item onClick = {() => handleRemoveRepo(repo.id)} key = {repo.id} repositorie={repo}/>)
            }
        </Container>
    )
}

export default Home
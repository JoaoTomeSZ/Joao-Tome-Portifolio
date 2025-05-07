import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const links = ['https://github.com/JoaoTomeSZ', 'https://www.linkedin.com/in/joaotomesz'];
const icons = [<GitHubIcon color="secondary" fontSize="large"/>, <LinkedInIcon color="primary" fontSize="large"/>];

const Icons = () => {
  return (
    <ul className="flex flex-auto lg:flex-col gap-4 ">
      {links.map((link, index) => (
        <li key={index} className="cursor-pointer">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {icons[index]}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Icons;
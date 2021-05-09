import { FormEvent, useState, useCallback } from "react";
import { IFormData, IOpitions, Icards, IChecklist, ITags } from "./types";
import { api } from "../../services/api";

import {
  Container,
  NameContainer,
  EmailContainer,
  ContentContainer,
  CheckContainer,
  DropdownContainer,
  OpetionContainer,
  TagContainer,
  TagContent,
  TagArea,
  Ptags,
} from "./style";

export function Form() {
  const [formData, setFormData] = useState<IFormData>({} as IFormData);
  const [options, setOptions] = useState<IOpitions>({
    option1: false,
    option2: false,
    option3: false,
  });

  const [tags, setTags] = useState<ITags>({
    web: false,
    ilustration: false,
    graphics: false,
    ui: false,
    design: false,
    app: false,
    iphone: false,
    interface: false,
    icon: false,
    webDesign: false,
  });

  const [inputName, setInputName] = useState(false);
  const [inputEmail, setInputEmail] = useState(false);

  const handleFormSubmitButton = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!formData.name) {
        setInputName(true);
        return;
      }
      if (!formData.email) {
        setInputEmail(true);
        return;
      }

      const APIKeys = {
        key: process.env.REACT_APP_API_KEY,
        token: process.env.REACT_APP_TOKEN,
        idList: process.env.REACT_APP_IDCART,
      };

      try {
        const cardPost = `/1/cards?key=${APIKeys.key}&token=${APIKeys.token}&idList=${APIKeys.idList}&name=${formData.name}&desc=${formData.content}`;
        const response = await api.post<Icards>(cardPost);
        const cardResponse = response.data;

        if (options.option1 || options.option2 || options.option3) {
          const checklistOptions = `/1/checklists?key=${APIKeys.key}&token=${APIKeys.token}&idCard=${cardResponse.id}&name=options`;
          const response = await api.post<IChecklist>(checklistOptions);
          const checklistResponse = response.data;

          for (let key in options) {
            if (options[key]) {
              const checklistAPI = `/1/checklists/${checklistResponse.id}/checkItems?key=${APIKeys.key}&token=${APIKeys.token}&name=${key}`;
              await api.post<Icards>(checklistAPI);
            }
          }
        }

        for (let key in tags) {
          if (tags[key]) {
            const tagPost = `/1/cards/${cardResponse.id}/labels?key=${APIKeys.key}&token=${APIKeys.token}&name=${key}&color=green`;
            await api.post(tagPost);
          }
        }

        return alert("Card criado com sucesso");
      } catch (err) {
        console.log(err);
      }
    },
    [formData.name, formData.email, formData.content, options, tags]
  );

  return (
    <Container action="#" onSubmit={handleFormSubmitButton}>
      <div>
        <NameContainer isError={!!inputName}>
          <span>Nome</span>
          <input
            type="text"
            placeholder="John Doe"
            value={formData?.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setInputName(false);
            }}
          />
        </NameContainer>
        <EmailContainer isError={!!inputEmail}>
          <span>Email</span>
          <input
            type="email"
            placeholder="error@gmail.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setInputEmail(false);
            }}
          />
        </EmailContainer>
        <ContentContainer>
          <textarea
            placeholder="type something"
            value={formData.content}
            onChange={(e) => {
              setFormData({ ...formData, content: e.target.value });
            }}
          />
        </ContentContainer>
      </div>
      <div>
        <CheckContainer>
          <div>
            <input
              id="option1"
              type="checkbox"
              onChange={(e) =>
                setOptions({ ...options, option1: e.target.checked })
              }
            />
            <label htmlFor="option1">Opção 1</label>
          </div>

          <div>
            <input
              id="option2"
              type="checkbox"
              onChange={(e) =>
                setOptions({ ...options, option2: e.target.checked })
              }
            />
            <label htmlFor="option2">Opção 2</label>
          </div>

          <div>
            <input
              id="option3"
              type="checkbox"
              onChange={(e) => {
                setOptions({ ...options, option3: e.target.checked });
              }}
            />
            <label htmlFor="option3">Opção 3</label>
          </div>
        </CheckContainer>
        <DropdownContainer>
          <label htmlFor="options">Dropdown</label>

          <select name="options" id="options">
            <option value="option1">Opção 1</option>
          </select>
        </DropdownContainer>
        <OpetionContainer>
          <div>
            <p>Opção 2</p>
          </div>
          <div>
            <p>Opção 3</p>
          </div>
        </OpetionContainer>
        <TagContainer>
          <p>tag</p>
          <TagArea>
            <TagContent>
              <Ptags
                isActive={tags.web}
                id="web"
                onClick={() => {
                  setTags({ ...tags, web: tags.web ? false : true });
                }}
              >
                web
              </Ptags>
              <Ptags
                isActive={tags.ilustration}
                id="ilustration"
                onClick={() => {
                  setTags({
                    ...tags,
                    ilustration: tags.ilustration ? false : true,
                  });
                }}
              >
                ilustration
              </Ptags>
              <Ptags
                isActive={tags.graphics}
                id="graphics"
                onClick={() => {
                  setTags({ ...tags, graphics: tags.graphics ? false : true });
                }}
              >
                graphics
              </Ptags>
              <Ptags
                isActive={tags.ui}
                id="ui"
                onClick={() => {
                  setTags({ ...tags, ui: tags.ui ? false : true });
                }}
              >
                ui
              </Ptags>
              <Ptags
                isActive={tags.design}
                id="design"
                onClick={() => {
                  setTags({ ...tags, design: tags.design ? false : true });
                }}
              >
                design
              </Ptags>
              <Ptags
                isActive={tags.app}
                id="app"
                onClick={() => {
                  setTags({ ...tags, app: tags.app ? false : true });
                }}
              >
                app
              </Ptags>
              <Ptags
                isActive={tags.iphone}
                id="iphone"
                onClick={() => {
                  setTags({ ...tags, iphone: tags.iphone ? false : true });
                }}
              >
                iphone
              </Ptags>
              <Ptags
                isActive={tags.interface}
                id="interface"
                onClick={() => {
                  setTags({
                    ...tags,
                    interface: tags.interface ? false : true,
                  });
                }}
              >
                interface
              </Ptags>
              <Ptags
                isActive={tags.icon}
                id="icon"
                onClick={() => {
                  setTags({ ...tags, icon: tags.icon ? false : true });
                }}
              >
                icon
              </Ptags>
              <Ptags
                isActive={tags.webDesign}
                id="webDesign"
                onClick={() => {
                  setTags({
                    ...tags,
                    webDesign: tags.webDesign ? false : true,
                  });
                }}
              >
                web design
              </Ptags>
            </TagContent>
            <button type="submit">Enviar</button>
          </TagArea>
        </TagContainer>
      </div>
    </Container>
  );
}

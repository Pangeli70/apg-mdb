/** -----------------------------------------------------------------------
 * @module [MDB/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.4 [APG 2023/01/09] Github beta
 * -----------------------------------------------------------------------
 */
import { Drash, StdPath, Tng, Uts } from "../../deps.ts";


export class ApgMdbHomeResource extends Drash.Resource {

    public override paths = ["/"];

    public async GET(_request: Drash.Request, response: Drash.Response){

        const menu: { href: string, caption: string }[] = [];


        const templateData = {
            site: {
                name: "Apg-Mdb",
                title: "Mongo test database "
            },
            page: {
                title: "Home",
                toolbar: "",
                released: "2023/01/09"
            },
            menu,
        };

        const html = await Tng.ApgTngService.Render("/home.html", templateData) as string;

        response.html(html);

    }


}

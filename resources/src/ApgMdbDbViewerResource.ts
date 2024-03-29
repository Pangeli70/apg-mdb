/** -----------------------------------------------------------------------
 * @module [Mdb/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.4 [APG 2023/01/09] Github Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../../deps.ts";


export class ApgMdbDbViewerResource extends Drash.Resource {

    public override paths = ["/db/viewer/:dbName"];

    public async GET(request: Drash.Request, response: Drash.Response) {

        const rawDbName = request.pathParam("dbName");


        const templateData = {
            site: { 
                name: "Apg-Mdb",
                title: "Apg " + rawDbName + " database collections"
            },
            page: {
                title: rawDbName + " collections",
                toolbar: "",
                released: "2023/01/09"
            },
            menu: [
                {
                    href: "https://apg-cdn.deno.dev/",
                    caption: "Cdn",
                    description: "A personal content delivery network on deno deploy with simple cache management."
                }
            ],
        };

        const html = await Tng.ApgTngService.Render("/db_viewer.html", templateData) as string;

        response.html(html);

    }


}

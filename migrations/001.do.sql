-- public.boms definition

-- Drop table

-- DROP TABLE public.boms;

CREATE TABLE public.boms (
	id int4 NOT NULL,
	selection text NOT NULL,
	"type" text NOT NULL,
	"level" int4 NOT NULL,
	t_n int4 NOT NULL,
	quantity int4 NOT NULL,
	item text NOT NULL,
	parent text NOT NULL,
	"path" text NOT NULL,
	path_id text NOT NULL,
	revision text NOT NULL,
	description text NOT NULL,
	description_en text NOT NULL,
	spare_index text NOT NULL,
	wbe text NOT NULL,
	description_wbe text NOT NULL,
	plant_id text NOT NULL,
  tag text NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" timestamp(3) NULL,
	"uuid" uuid NOT NULL DEFAULT gen_random_uuid(),
	CONSTRAINT bom_pkey PRIMARY KEY (uuid)
);


-- public.drawings definition

-- Drop table

-- DROP TABLE public.drawings;

CREATE TABLE public.drawings (
	filename text NOT NULL,
	"extension" text NOT NULL,
	"size" int4 NOT NULL,
	item text NULL,
	creation_date timestamp(3) NOT NULL,
	last_access_date timestamp(3) NOT NULL,
	last_modified_date timestamp(3) NOT NULL,
	plant_id text NOT NULL,
  tag text NULL,
	"uuid" uuid NOT NULL DEFAULT gen_random_uuid(),
	CONSTRAINT drawing_pkey PRIMARY KEY (uuid)
);
CREATE UNIQUE INDEX drawing_filename_idx ON public.drawings USING btree (filename);


-- public.notes definition

-- Drop table

-- DROP TABLE public.notes;

CREATE TABLE public.notes (
	"uuid" uuid NOT NULL,
	"content" varchar NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" timestamp(3) NULL,
	CONSTRAINT note_pkey PRIMARY KEY (uuid),
	CONSTRAINT note_uuid_fkey FOREIGN KEY ("uuid") REFERENCES public.boms("uuid")
);

-- public.settings definition

-- Drop table

-- DROP TABLE settings;

CREATE TABLE settings (
	set_code varchar NOT NULL,
	item_code varchar NOT NULL,
	item_value varchar NOT NULL,
	"createdAt" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" timestamp(3) NULL,
	CONSTRAINT settings_pkey PRIMARY KEY (set_code, item_code)
);
CREATE INDEX settings_set_code_item_code ON public.settings USING btree (set_code, item_code);
CREATE INDEX settings_set_code_item_value ON public.settings USING btree (set_code, item_value);
